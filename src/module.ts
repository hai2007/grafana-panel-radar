import { PanelPlugin } from '@grafana/data';
import { MapOptions } from './types';
import { MapPanel } from './MapPanel';

export const plugin = new PanelPlugin<MapOptions>(MapPanel).setPanelOptions((builder) => {
    return builder.addTextInput({
        path: 'fillColor',
        name: '地图颜色',
        description: '用于设置地图的颜色',
        defaultValue: 'gray',
    });
});
