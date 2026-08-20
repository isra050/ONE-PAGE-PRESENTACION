/**
 * RIGEOPS - App Logic (Clean Version)
 */

document.addEventListener('DOMContentLoaded', () => {
  initRoiCalculator();
});

function initRoiCalculator() {
  const teamSlider = document.getElementById('slider-team');
  const hoursSlider = document.getElementById('slider-hours');
  const teamVal = document.getElementById('val-team');
  const hoursVal = document.getElementById('val-hours');
  const resultHours = document.getElementById('result-hours');
  const resultCost = document.getElementById('result-cost');

  if (!teamSlider || !hoursSlider) return;

  function calculate() {
    const team = parseInt(teamSlider.value, 10);
    const hours = parseInt(hoursSlider.value, 10);

    teamVal.textContent = team;
    hoursVal.textContent = hours;

    const monthlyTotal = team * hours * 4.3;
    const saved = Math.round(monthlyTotal * 0.8);
    const money = Math.round(saved * 12);

    resultHours.textContent = saved.toLocaleString();
    resultCost.textContent = `~$${money.toLocaleString()} USD/mes`;
  }

  teamSlider.addEventListener('input', calculate);
  hoursSlider.addEventListener('input', calculate);
  calculate();
}
