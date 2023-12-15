class Parallelogram {
    constructor(base, height, angle, sideA, sideB) {
        this.base = base;
        this.height = height;
        this.angle = angle;
        this.sideA = sideA;
        this.sideB = sideB;
    }

    calculateAreaWithHeight() {
        return this.base * this.height;
    }

    calculateAreaWithAngle() {
        // Convert the angle to radians before using Math.sin
        const angleInRadians = (this.angle * Math.PI) / 180;
        return this.sideA * this.sideB * Math.sin(angleInRadians);
    }
}

// Example usage:
const parallelogram = new Parallelogram(8, 5, 60, 6, 7);

const areaWithHeight = parallelogram.calculateAreaWithHeight();
console.log(`Terület kiszámítása magassággal és alappal: ${areaWithHeight} négyzetegység`);


const areaWithAngle = parallelogram.calculateAreaWithAngle();
console.log(`Terület kiszámítása szöggel és két oldallal: ${areaWithAngle} négyzetegység`);
