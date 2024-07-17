export class AudioWorkletModule extends AudioWorkletProcessor {
  process(inputs, outputs, parameter) {
  }
}
registerProcessor('audio-worklet-module', AudioWorkletModule);
