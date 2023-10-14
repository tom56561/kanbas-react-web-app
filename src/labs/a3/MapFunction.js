let numberArray1 = [1, 2, 4, 5, 6];
const square = a => a * a;
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
const MapFunction = () => (
    <>
        <h4>Map</h4>
        squares = {squares}<br/>
        cubes = {cubes}
    </>
)
export default MapFunction