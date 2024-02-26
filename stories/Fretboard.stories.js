// TODO: convert to TypeScript.

import { number } from "prop-types";
import { Fretboard } from "../shared/components/Fretboard";

export default {
    title: 'Fretboard',
    component: Fretboard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    }
};

export const Strat = {
    args: {
        numFrets: 22,
        numStrings: 5
    }
}

export const PrecisionBass = {
    args: {
        numFrets: 20,
        numStrings: 4
    }
}