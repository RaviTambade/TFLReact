console.log("This is javascript code getting executed from external file");

async function readProductsXML() {
    const response = await fetch("/products.xml");
    const xmlText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const products = xmlDoc.getElementsByTagName("Product");

    for (let i = 0; i < products.length; i++) {
        const p = products[i];

        console.log({
            id: p.getElementsByTagName("id")[0].textContent,
            title: p.getElementsByTagName("title")[0].textContent,
            description: p.getElementsByTagName("description")[0].textContent,
            price: p.getElementsByTagName("price")[0].textContent,
            likes: p.getElementsByTagName("likes")[0].textContent,
            ratings: p.getElementsByTagName("ratings")[0].textContent
        });
    }
}

readProductsXML();