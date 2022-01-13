function calcFeatureCollection(data: any) {
    var temp = calcFeature(data.features[0]),
        minX = temp.minX,
        maxX = temp.maxX,
        minY = temp.minY,
        maxY = temp.maxY,
        centers = [[(temp.maxX + temp.minX) * 0.5, (temp.maxY + temp.minY) * 0.5]],
        i;

    for (i = 1; i < data.features.length; i++) {
        temp = calcFeature(data.features[i]);

        if (temp.minX < minX) {
            minX = temp.minX;
        }
        if (temp.maxX > maxX) {
            maxX = temp.maxX;
        }
        if (temp.minY < minY) {
            minY = temp.minY;
        }
        if (temp.maxY > maxY) {
            maxY = temp.maxY;
        }

        centers.push([(temp.maxX + temp.minX) * 0.5, (temp.maxY + temp.minY) * 0.5]);
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
        centers: centers,
    };
}

// 计算边界值
// 自动区分区域类型
function calcFeature(data: any) {
    if (data.geometry.type === 'Polygon') {
        return calcPolygon(data.geometry.coordinates);
    } else {
        return calcMultiPolygon(data.geometry.coordinates);
    }
}

// 获取多区域的统一边界值
function calcMultiPolygon(data: any) {
    var minX = data[0][0][0][0],
        maxX = data[0][0][0][0],
        minY = data[0][0][0][1],
        maxY = data[0][0][0][1],
        i,
        temp;

    for (i = 0; i < data.length; i++) {
        temp = calcPolygon(data[i]);

        if (temp.minX < minX) {
            minX = temp.minX;
        }
        if (temp.maxX > maxX) {
            maxX = temp.maxX;
        }
        if (temp.minY < minY) {
            minY = temp.minY;
        }
        if (temp.maxY > maxY) {
            maxY = temp.maxY;
        }
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
    };
}

// 获取坐标的最值
function calcPolygon(data: any) {
    var minX = data[0][0][0],
        maxX = data[0][0][0],
        minY = data[0][0][1],
        maxY = data[0][0][1],
        i,
        j;

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {
            if (minX > data[i][j][0]) {
                minX = data[i][j][0];
            } else if (maxX < data[i][j][0]) {
                maxX = data[i][j][0];
            }

            if (minY > data[i][j][1]) {
                minY = data[i][j][1];
            } else if (maxY < data[i][j][1]) {
                maxY = data[i][j][1];
            }
        }
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
    };
}

export default function (data: any) {
    var temp: any;

    if (data.type === 'FeatureCollection') {
        temp = calcFeatureCollection(data);
    } else if (data.type === 'Feature') {
        temp = calcFeature(data);
    } else {
        throw new Error('Type error!' + JSON.stringify({ function: 'getCenter', type: data.type }));
    }

    return [
        (temp.maxX + temp.minX) * 0.5,
        (temp.maxY + temp.minY) * 0.5,
        temp.maxX - temp.minX,
        temp.maxY - temp.minY,
        temp.centers,
    ];
}
