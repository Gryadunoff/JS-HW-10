var user = [{
  name: 'Panda Vasya', url: 'https://usnd.to/CAWX',
  description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'
},
{
  name: 'Panda Petya',
  url: 'https://usnd.to/CAWQ',
  description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'
},
{
  name: 'Panda Fedya',
  url: 'https://usnd.to/CAWf',
  description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'
}]

var body = document.body;

user.forEach(function (index) {
  var div = document.createElement('div'),
      h2 = document.createElement('h2'),
      img = document.createElement('img'),
      p = document.createElement('p');
  div.className = 'wrap'
  h2.innerText = index.name;
  img.setAttribute('src', index.url);
  p.innerText = index.description;

  div.append(h2)
  div.append(img)
  div.append(p)
  body.append(div)

})