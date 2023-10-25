<template>
    <div class="modal-overlay">
        <div class="modal">
            <span class="close" @click="closeModal">&times;</span>
            <div class="login-form-box">
                <h3 class="title">Iniciar sesión</h3>
                <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
                <form>
                    <div class="form-group">
                        <label for="current-log-email">Email*</label>
                        <input type="email" name="current-log-email" id="current-log-email"
                            placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="current-log-password">Contraseña*</label>
                        <input type="password" name="current-log-password" id="current-log-password"
                            placeholder="Contraseña">
                        <span class="password-show"><i class="icon-76"></i></span>
                    </div>
                    <div class="form-group chekbox-area">
                        <div class="edu-form-check">
                            <input type="checkbox" id="remember-me">
                            <label for="remember-me">Recuerdame</label>
                        </div>
                        <a href="#" class="password-reset">Perdiste tu contraseña?</a>
                    </div>
                    <div class="form-group">
                        <button type="button" class="edu-btn btn-medium">Iniciar sesión <i class="icon-4"></i></button>
                    </div>
                </form>
            </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

</style>