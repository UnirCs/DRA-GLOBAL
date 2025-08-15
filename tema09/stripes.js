/* Paint Worklet que dibuja rayas diagonales y admite desplazamiento */
registerPaint('stripes', class {
    static get inputProperties() {
        return ['--stripe-a', '--stripe-b', '--stripe-w', '--stripe-offset'];
    }

    paint(ctx, geom, props) {
        const a      = props.get('--stripe-a').toString();
        const b      = props.get('--stripe-b').toString();
        const w      = parseFloat(props.get('--stripe-w'));
        const offset = parseFloat(props.get('--stripe-offset'));
        const hyp    = Math.hypot(geom.width, geom.height);

        ctx.rotate(45 * Math.PI / 180);              // giro de 45°
        for (let i = -hyp + offset; i < hyp + offset; i += w * 2) {
            ctx.fillStyle = a;
            ctx.fillRect(i, -hyp, w, hyp * 2);
            ctx.fillStyle = b;
            ctx.fillRect(i + w, -hyp, w, hyp * 2);
        }
    }
});
