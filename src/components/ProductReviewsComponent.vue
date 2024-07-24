<template>
  <div class="reviews-container">
    <h2>Product reviews</h2>
    <div class="reviews-wrapper">
      <div class="review">
        <div class="status">
          <h3>good</h3>
        </div>
        <div class="review-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="review-author">
          <div class="profile">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="author-name">
            <h4>john doe</h4>
            <span>2022-10-10</span>
          </div>
        </div>
      </div>

      <div class="review">
        <div class="status">
          <h3>good</h3>
        </div>
        <div class="review-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="review-author">
          <div class="profile">
            <img src="" alt="" />
          </div>
          <div class="author-name">
            <h4>john doe</h4>
            <span>2022-10-10</span>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="status">
          <h3>good</h3>
        </div>
        <div class="review-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="review-author">
          <div class="profile">
            <img src="" alt="" />
          </div>
          <div class="author-name">
            <h4>john doe</h4>
            <span>2022-10-10</span>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="status">
          <h3>good</h3>
        </div>
        <div class="review-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="review-author">
          <div class="profile">
            <img src="" alt="" />
          </div>
          <div class="author-name">
            <h4>john doe</h4>
            <span>2022-10-10</span>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="status">
          <h3>good</h3>
        </div>
        <div class="review-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="review-author">
          <div class="profile">
            <img src="" alt="" />
          </div>
          <div class="author-name">
            <h4>john doe</h4>
            <span>2022-10-10</span>
          </div>
        </div>
      </div>
    </div>
    <button>view more...</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.reviews-container {
  width: 100%;
  height: 30rem;
  text-align: center;
  margin: 7% auto;
  background-color: var(--color-background);

  padding: 0.5em;
  overflow: hidden;
}

.reviews-container h2 {
  font-weight: 500;
  font-size: 1.7em;
}

.reviews-container > button {
  outline: none;
  padding: 1em;
  background-color: transparent;
  border: none;
  text-transform: capitalize;
}

.reviews-wrapper {
  width: 100%;
  height: 70%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  gap: 0.7em;
}

.review {
  border: 1px solid rgba(183, 185, 190, 0.5);
  border-radius: 0.4em;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 0 0.3em rgba(183, 185, 190, 0.3);
}

.review .status {
  width: 100%;
  text-align: left;
  text-transform: capitalize;
}

.review .status h3 {
  font-weight: 600;
  font-size: 0.8em;
}

.review .review-text {
  padding: 1em;
}
.review .review-text p {
  word-wrap: wrap;
}

.review-author {
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0.3em;
}

.review-author .profile {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.3em;
  overflow: hidden;
}

.review-author .profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review .author-name {
  padding: 0 0.5em;
}

.author-name h4 {
  font-weight: 600;
}

.author-name span {
  font-size: 0.7em;
  display: block;
}
</style>
