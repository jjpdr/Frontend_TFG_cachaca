const checkCPF = (strCPF) => {
    const re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;

    return re.test(strCPF);
};

export default checkCPF;
