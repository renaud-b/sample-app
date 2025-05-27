function SayHello(name, count) {
    const output = [];
    for (let i = 0;
         (i < count); ++i) {
        output.push(("Hey Hello " + name));
    }
    return JSON.stringify(output);
}