function SayHello(name, count) {
    const output = [];
    for (let i = 0;
         (i < count); ++i) {
        output.push("Hello " + name);
    }
    return JSON.stringify(output);
}