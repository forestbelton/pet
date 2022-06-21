const canvas = document.getElementById('canvas') as HTMLCanvasElement;
if (canvas === null) {
    throw new Error("Could not find canvas element #canvas in DOM!");
}

const context = canvas.getContext('2d');
if (context === null) {
    throw new Error("Could not retrieve canvas 2D context");
}

context.clearRect(0, 0, canvas.width, canvas.height);

context.fillStyle = '#f00';
context.fillRect(0, 0, canvas.width, canvas.height);
