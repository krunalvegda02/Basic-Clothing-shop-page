document.addEventListener('DOMContentLoaded', function () {
    const submitRatingBtn = document.getElementById('submitRating');
    const ratingInput = document.getElementById('rating');
    const reviewInput = document.getElementById('reviewInput');
    const reviewList = document.getElementById('reviewList');
    const submitReviewBtn = document.getElementById('submitReview');

    // submitRatingBtn.addEventListener('click', function () {
    //     const rating = ratingInput.value;
    //     if (rating >= 1 && rating <= 5) {
    //         alert("Thank you for rating us ${rating}5!");
    //         ratingInput.value = '';
    //     } else {
    //         alert('Please enter a rating between 1 and 5.');
    //     }
    // });

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