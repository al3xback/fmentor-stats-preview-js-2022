const cardEl = document.querySelector('.card');

/* Array at() */
const imageFormats = ['.png', '.jpg', '.webp'];
const pickedImageFormat = imageFormats.at(1);

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.src = './images/meeting' + pickedImageFormat;

/* Class field declarations */
class Image {
	alt = 'People at a meeting';
	loading = 'eager';
}

const image = new Image();

cardImageEl.alt = image.alt;
cardImageEl.loading = image.loading;

/* Private methods and fields */
class PremiumImage extends Image {
	#price = 200;
	#getPrice() {
		console.log(this.price);
	}
}

const premiumImage = new PremiumImage();
console.log(premiumImage);

/* String at() */
const text = 'insights';
const markText =
	text.at[0] +
	text.at[1] +
	text.at[2] +
	text.at[3] +
	text.at[4] +
	text.at[5] +
	text.at[6] +
	text.at[7];

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = markText;
