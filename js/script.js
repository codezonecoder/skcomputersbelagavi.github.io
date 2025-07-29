$(document).ready(function () {
    filterFunction();
    console.log("hi")
})

function filterFunction() {
    const buttons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');

    buttons.forEach(button => {
        console.log("hi");
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            products.forEach(product => {
                const category = product.getAttribute('data-category');
                product.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
            });
        });
    });
}
