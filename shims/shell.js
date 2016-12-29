exports.beep = function() {
  context = new AudioContext();

  // A note.
  const oscillator = context.createOscillator();
  oscillator.frequency.value = 440;

  // Volume adjustment.
  const vca = context.createGain();
  vca.gain.value = .25;
  oscillator.connect(vca);
  vca.connect(context.destination);

  // Play the beep.
  oscillator.start(0);
  oscillator.stop(.1);
};
