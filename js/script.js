function toggleMembership(id) {
    document.getElementById(id).classList.toggle('open');
}

function submitContact() {
    const form = document.getElementById('contactForm');
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;
    bootstrap.Modal.getInstance(document.getElementById('contactModal')).hide();
    form.classList.remove('was-validated');
    form.reset();
    showToast('✓ Message sent! We\'ll be in touch soon.');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}
