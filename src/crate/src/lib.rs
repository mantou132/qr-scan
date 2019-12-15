use bardecoder;
use image::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct QrDetector {
  pub width: u32,
  pub height: u32,
}

#[wasm_bindgen]
impl QrDetector {
  pub fn new(width: u32, height: u32) -> QrDetector {
    QrDetector { width, height }
  }
  /// detect qrcode
  pub fn detect(&self, buffer: &mut [u8]) -> String {
    let img = DynamicImage::ImageRgba8(
      ImageBuffer::from_vec(self.width, self.height, buffer.to_vec()).unwrap(),
    );
    let decoder = bardecoder::default_decoder();
    let results = decoder.decode(img);
    let mut results_string = String::new();
    for result in results {
      results_string.push_str(&result.unwrap());
    }
    results_string
  }
}
