const layersOrder = [
    { name: 'background', number: 7 },
    { name: 'body', number: 2 },
    { name: 'emotions', number: 3 },
    { name: 'clothes', number: 2 },
    { name: 'eyeWear', number: 5 },
    { name: 'accessories', number: 6 },
];
  
const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };