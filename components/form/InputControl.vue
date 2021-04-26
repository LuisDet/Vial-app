<template>
  <div class="form-control">
    <slot></slot>
  </div>
</template>

<style scoped>
.form-control {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-control label {
  font-size: 1.1rem;
  color: #818e9b;
  font-weight: 500;
  margin-bottom: 5px;
}

.form-control input,
.form-control select,
.form-control textarea {
  border: none;
  border-bottom: 2px solid #d3d8dd;
  padding: 10px 5px;
  font-size: 1.8rem;
  font-weight: 300;
  color: #192a3e;
}

.form-control input:focus,
.form-control textarea:focus,
.form-control select:focus {
  outline: none;
  border-bottom: 2px solid #ffcd00;
}
</style>
