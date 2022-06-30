import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const FilterPanel = () => {

    const [price, setPrice] = useState([1, 2000]);

    return (
        <>  </>
    );
}

export default FilterPanel;