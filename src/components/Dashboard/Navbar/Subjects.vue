<template>
    <div class="subjects">
        <div id="notification" class="notification is-info is-light">
  <button @click="deleteNotifi" id="deleteButton" class="delete"></button>
  Based on a detailed analysis of Monoxia, various useful formulas have been converted into algorithms and integrated into graphics. This study covers an important research area aimed at enhancing the functionality of Monoxia.
</div>
        <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Subjects</th>
    </tr>
  </thead>
  <tbody>
    <tr class="is-selected">
      <th>1</th>
      <td>Demand</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Supply</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Market equilibrium under perfect competition (Partial equilibrium)</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Factors affecting supply and demand of the good, other than its price</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Measurability problem of utility and determination of preference order</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Principle of equal marginal utility and consumer equilibrium</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Indifference analysis and consumer equilibrium</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Production function and efficiency analysis</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Production with the lowest cost</td>
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