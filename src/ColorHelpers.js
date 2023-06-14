import chroma from "chroma-js";

// These will be the levels of brightness for our colors
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePallet(starterPallet) {
    let newPallet = {
        paletteName: starterPallet.paletteName,
        id: starterPallet.id,
        emoji: starterPallet.emoji,
        colors: {}
    };

    // Creating an empty array for each of the levels
    for(const level of levels) {
        newPallet.colors[level] = [];
    }

    // Loop over all the levels and generate a scale for each
    for (const color of starterPallet.colors) {
        let scale = generateScale(color.color, 10).reverse();

        // Loop the scale and populate each level with the 10 generated colors
        for(const i in scale) {
            newPallet.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
            })
        }
    }

    return newPallet;
}

/**
 * Builds a range of colors based of the color passed in
 *
 * @param {string} hexColor The color we want to create a range for
 * @returns 3 values, the darker shade, provided shade, white
 */
function getRange(hexColor) {
    const end = '#fff';

    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

/**
 * Create a scale of colors based off the color provided
 *
 * @param {string} hexColor The color to create a scale for
 * @param {*} numOfColors The amount of levels you want on the scale
 * @returns The calculated color scale
 */
function generateScale(hexColor, numOfColors) {
    return chroma
        .scale(getRange(hexColor))
        .mode('lab')
        .colors(numOfColors);
}

export { generatePallet };
