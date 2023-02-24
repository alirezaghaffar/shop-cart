const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitel = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitel;
}

export { shorten }