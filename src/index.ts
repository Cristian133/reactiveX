const observer = {
    next: (value: number) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const number = [1, 2, 3, 4, 5];
const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
