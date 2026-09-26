// Progressive AJAX submit for every <form class="js-ajax-form">.
type ApiResponse = { ok: boolean; message?: string; errors?: Record<string, string> };

function setStatus(form: HTMLFormElement, message: string, type: 'success' | 'error' | '') {
	const box = form.querySelector<HTMLElement>('.form-status');
	if (!box) return;
	box.textContent = message;
	box.className = `form-status${type ? ` is-${type}` : ''}`;
}

function clearErrors(form: HTMLFormElement) {
	form.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));
	form.querySelectorAll<HTMLElement>('[data-error-for]').forEach((el) => (el.textContent = ''));
}

function showErrors(form: HTMLFormElement, errors: Record<string, string>) {
	for (const [name, msg] of Object.entries(errors)) {
		form.querySelector(`[name="${name}"]`)?.classList.add('is-invalid');
		const slot = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
		if (slot) slot.textContent = msg;
	}
	form.querySelector<HTMLElement>('.is-invalid')?.focus();
}

/** Browser-side check using the built-in constraint validation. */
function validate(form: HTMLFormElement) {
	const errors: Record<string, string> = {};
	form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]').forEach((f) => {
		if (!f.checkValidity()) {
			const label = f.getAttribute('aria-label') ?? f.name;
			errors[f.name] = f.validity.valueMissing ? `${label} is required.` : `Please enter a valid ${label.toLowerCase()}.`;
		}
	});
	return errors;
}

function setLoading(form: HTMLFormElement, loading: boolean) {
	const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	if (btn) btn.disabled = loading;
	form.querySelector('.btn-label')?.classList.toggle('d-none', loading);
	form.querySelector('.btn-loading')?.classList.toggle('d-none', !loading);
}

document.querySelectorAll<HTMLFormElement>('form.js-ajax-form').forEach((form) => {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		clearErrors(form);
		setStatus(form, '', '');

		const errors = validate(form);
		if (Object.keys(errors).length) {
			showErrors(form, errors);
			setStatus(form, 'Please correct the highlighted fields.', 'error');
			return;
		}

		setLoading(form, true);
		try {
			const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
			const data: ApiResponse = await res.json().catch(() => ({ ok: false }));

			if (res.ok && data.ok) {
				const redirect = form.dataset.successRedirect;
				if (redirect) {
					window.location.href = redirect;
					return;
				}
				form.reset();
				setStatus(form, data.message ?? 'Thank you!', 'success');
			} else {
				if (data.errors) showErrors(form, data.errors);
				setStatus(form, data.message ?? 'Something went wrong. Please try again.', 'error');
			}
		} catch {
			setStatus(form, 'Network error. Please check your connection and try again.', 'error');
		} finally {
			setLoading(form, false);
		}
	});
});
