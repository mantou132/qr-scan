import { GemElement, customElement, attribute, emitter, html } from '@mantou/gem';

interface State {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * @attr width
 * @attr height
 * @attr type
 * @attr bound
 * @fires success
 * @fires detected
 * @fires notallow
 * @slot video
 */
@customElement('qr-scan')
export default class QrScan extends GemElement<State> {
  @attribute width: string;
  @attribute height: string;
  @attribute type: 'url';
  @attribute bound: string;
  @emitter success: (result: string) => void;
  @emitter detected: (result: string) => void;
  @emitter notallow: Function;

  _timer = 0;

  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  constructor(width?: number, height?: number) {
    super();
    if (width) this.width = String(width);
    if (height) this.height = String(height);
  }

  get videoElement(): HTMLVideoElement | null {
    const slot = this.shadowRoot?.querySelector('slot[name=video]') as HTMLSlotElement;
    return slot.assignedElements()?.[0] as HTMLVideoElement;
  }

  async detect(data: ImageData) {
    if (!this.width && !this.height) throw new Error('`width` or `height` does not exist');
    const { QrDetector } = await import('./crate/pkg');
    const detector = QrDetector.new(Number(this.width), Number(this.height));
    return detector.detect(new Uint8Array(data.data));
  }

  async init() {
    if (!this.width && !this.height) return;
    const { QrDetector } = await import('./crate/pkg');
    let stream: MediaStream;
    let video: HTMLVideoElement;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
        },
      });
    } catch (err) {
      this.notallow(err);
      throw err;
    }
    if (this.videoElement) {
      video = this.videoElement;
    } else {
      video = document.createElement('video');
    }
    const canvas = document.createElement('canvas');
    const ctx = canvas?.getContext('2d');
    if (!ctx) throw new Error('canvas context error');
    video.srcObject = stream;
    video.setAttribute('playsinline', '');
    await video.play();
    const width = Math.min(Number(this.width), video.videoWidth);
    const height = Math.min(Number(this.height), video.videoHeight);
    const x = (video.videoWidth - width) / 2;
    const y = (video.videoHeight - height) / 2;
    const scale = video.clientWidth / video.videoWidth;
    this.setState({ x: x * scale, y: y * scale, width: width * scale, height: height * scale });
    canvas.width = width;
    canvas.height = height;
    const detector = QrDetector.new(width, height);
    const tick = async () => {
      try {
        ctx.drawImage(video, x, y, width, height, 0, 0, width, height);
        const buffer = ctx.getImageData(0, 0, width, height).data;
        const result = detector.detect(new Uint8Array(buffer));
        this.detected(result);
        if (result && this.valid(result)) this.success(result);
      } finally {
        this._timer = requestAnimationFrame(tick);
      }
    };
    this._timer = requestAnimationFrame(tick);
  }

  private valid(str: string) {
    switch (this.type) {
      case 'url':
        try {
          new URL(str);
          return true;
        } catch {
          return false;
        }
      default:
        return true;
    }
  }

  mounted() {
    this.init();
  }

  attributeChanged() {
    cancelAnimationFrame(this._timer);
    this.init();
  }

  render() {
    return html`
      <style>
        :host {
          position: relative;
          display: block;
          overflow: hidden;
        }
        .bound {
          position: absolute;
          outline: 2px solid;
          width: ${this.state.width}px;
          height: ${this.state.height}px;
          left: ${this.state.x}px;
          top: ${this.state.y}px;
        }
        [hidden] {
          display: none;
        }
      </style>
      <slot name="video"></slot>
      <div ?hidden=${!this.bound || !this.state.width || !this.state.height} part="bound" class="bound"></div>
    `;
  }
}
