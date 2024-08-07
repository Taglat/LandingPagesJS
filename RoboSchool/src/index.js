import './index.html';
import './index.scss';

import "./js/burger";
import { toggleTooltip } from './js/tooltip';
document.querySelector('.profits-card__tooltip').addEventListener('click', toggleTooltip);