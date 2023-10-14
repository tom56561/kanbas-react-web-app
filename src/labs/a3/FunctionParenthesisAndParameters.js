
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

const FunctionParenthesisAndParameters = _ => (
    <>
        <h3>Parenthesis and parameters</h3>
        twoSquared = {twoSquared}<br/>
        square(2) = {square(2)}<br/>
        threePlusOne = {threePlusOne}<br/>
        plusOne(3) = {plusOne(3)}
    </>
)

export default FunctionParenthesisAndParameters