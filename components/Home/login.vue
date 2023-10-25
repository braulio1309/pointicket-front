<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="login-form-box">
                    <h3 class="title">Iniciar sesión</h3>
                    <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
                    <form>
                        <div class="form-group">
                            <label for="current-log-email">Email*</label>
                            <input type="email" name="current-log-email" id="current-log-email" placeholder="Email">
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
    </div>
</template>
  
<script>
import MouseMove from '../animation/MouseMove.vue';


export default {
    name: "app",
    components: {
        MouseMove
    },
};
</script>
<style>
.hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape span {
    width: 41px;
    height: 41px;
    background: var(--color-tertiary);
    border-radius: 100%;
}
</style>