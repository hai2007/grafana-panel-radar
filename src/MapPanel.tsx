import React from 'react';
import { PanelProps } from '@grafana/data';
import { MapOptions } from 'types';
import { css, cx } from 'emotion';
import Map from 'map';

interface Props extends PanelProps<MapOptions> {}

export const MapPanel: React.FC<Props> = ({ options, data, width, height }) => {
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
            <Map></Map>
        </div>
    );
};
