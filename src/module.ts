import { PanelPlugin } from '@grafana/data';
import { RadarOptions } from './types';
import { RadarPanel } from './RadarPanel';

export const plugin = new PanelPlugin<RadarOptions>(RadarPanel).setPanelOptions((builder) => {
    return builder.addTextInput({
        path: 'fontColor',
        name: '文字颜色',
        description: '用于设置文字的颜色',
        defaultValue: 'white',
    });
});
