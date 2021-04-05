<template>
  <!-- Site footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Me, Myself and I.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
}
</script>

<style scoped>
.site-footer {
  background-color: var(--primary);
  color: var(--white);
  bottom: 0;
  padding: 45px 0 20px;
  text-align: center;
  font-size: 15px;
  line-height: 24px;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 1rem;
}
</style>
