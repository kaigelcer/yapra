let categoryColors: string[] = [
  '#ffffff',
  '#96c582',
  '#b7d5c4',
  '#bcd6e7',
  '#7c90c1',
  '#dad0d8',
  '#c6a670',
  '#efabbd',
  '#f0b89a',
  '#f0ca68',
  '#FFFDE4',
  '#FBFAB2',
  '#D2D2D3',
  '#F3E079',
  '#587EC9',
  '#F26B68',
  '#6BB6DE',
  '#ABDEE1',
  '#72DB76',
  '#F6A3B5',
];

function randomColor() {
  return categoryColors[Math.floor(Math.random() * categoryColors.length)];
}

export { categoryColors, randomColor };
