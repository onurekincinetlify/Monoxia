<template>
    <div class="formulas">
      <div id="notification" class="notification is-info is-light">
  <button @click="deleteNotifi" id="deleteButton" class="delete"></button>
  Based on a detailed analysis of Monoxia, various useful formulas have been converted into algorithms and integrated into graphics. This study covers an important research area aimed at enhancing the functionality of Monoxia.
</div>
        <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Subject</th>
      <th><abbr title="Subheading">SH</abbr></th>
      <th><abbr title="Sub-Subheading">SSH</abbr></th>
      <th>Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Demand</td>
      <td>Demand Function</td>
      <td></td>
      <td>Mtx = f(Fx, Fr, Ft, G, T)</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Demand</td>
      <td>Demand Schedule and Demand Curve</td>
      <td></td>
      <td>Mtx = f(Fx)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Demand</td>
      <td>Individual Demand Function and Market Demand Function</td>
      <td></td>
      <td>Mtx = f(Fx, Fr, Ft, G, T, N, Gd, K)</td>
    </tr>
    <tr class="is-selected">
      <th>4</th>
      <td>Demand</td>
      <td>Price Elasticity of Demand</td>
      <td></td>
      <td>ef = (Percentage Change in Quantity Demanded / Percentage Change in Price)</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Demand</td>
      <td>Price Elasticity of Demand</td>
      <td></td>
      <td>er = (ΔM / M) / (ΔF / F) = (ΔM / ΔF) x F / M</td>
    </tr>
    <tr class="is-selected">
      <th>6</th>
      <td>Demand</td>
      <td>Price Elasticity of Demand</td>
      <td></td>
      <td>ep = ((M1 - M2) / ((M1 + M2)/2)) / ((F1 - F2)/((F1 + F2)/2)) = (ΔM / (M1 + M2)) / (ΔF / F1 + F2)</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script lang="ts" setup>
const deleteNotifi = () => {
let deleteButton= document.getElementById('notification');
if (deleteButton) {
    deleteButton.classList.add('deleteEL');
} else {
}
}
</script>

<style scoped lang="scss">
.deleteEL {
    display: none;
}
table{
    width: 100%;
}
</style>