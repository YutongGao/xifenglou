export class JuejiGenerator{
  juejiMap = [
    {
      name: "吕惠娘",
      friend: ['章七姐', '吕嘉儿'],
      available: true
    },
    {
      name: "章七姐",
      friend: ['吕惠娘', '曾紫萱', '林惜惜'],
      available: false
    },
  ];
  initJueji(){
    return this.juejiMap;
  }
}
