document.addEventListener('DOMContentLoaded', function () {
    const submitRatingBtn = document.getElementById('submitRating');
    const ratingInput = document.getElementById('rating');
    const reviewInput = document.getElementById('reviewInput');
    const reviewList = document.getElementById('reviewList');
    const submitReviewBtn = document.getElementById('submitReview');


    submitReviewBtn.addEventListener('click', function () {
        const review = reviewInput.value.trim();
        if (review !== '') {
            const li = document.createElement('li');
            li.textContent = review;
            reviewList.appendChild(li);
            reviewInput.value = '';
        } else {
            alert('Please write a review before submitting.');
        }
    });
});