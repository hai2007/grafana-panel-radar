import React from 'react';
import { PanelProps } from '@grafana/data';
import { RadarOptions } from 'types';
import { css, cx } from 'emotion';
import Radar from 'radar';

interface Props extends PanelProps<RadarOptions> {}

export const RadarPanel: React.FC<Props> = ({ options, data, width, height }) => {
    return (
        <div
            className={cx(
                css`
                    width: ${width}px;
                    height: ${height}px;
                    position: relative;
                `
            )}
        >
            <Radar fontColor={options.fontColor}></Radar>
        </div>
    );
};
