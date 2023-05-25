import { useState } from 'react';

const Contact = () => {
	const [status, setStatus] = useState('Submit');
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Submitting');
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('Submitted');
			} else {
				setStatus('Submit');
			}
		};
		xhr.send(data);
	}
}
