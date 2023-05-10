export default function Pic() {
  const data = [];
  for (let i = 31; i <= 89; i++) {
    const pic = require(`../../../assets/images/pics/Group27${i}.png`);
    data.push(pic);
  }
  data.sort(() => Math.random() - 0.5);
  return { data };
}
