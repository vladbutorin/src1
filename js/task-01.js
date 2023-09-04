const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Всего категорий: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;

    console.log(`Категория: ${categoryName}`);
    console.log(`Количество элементов: ${categoryItemsCount}`);
});