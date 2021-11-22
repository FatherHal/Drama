// Expand Post

function expandText(id) {
	document.getElementById('post-text-'+id).classList.toggle('d-none');
	document.getElementsByClassName('text-expand-icon-'+id)[0].classList.toggle('fa-expand-alt');
	document.getElementsByClassName('text-expand-icon-'+id)[0].classList.toggle('fa-compress-alt');
};

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

const popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
	const popoverId = popoverTriggerEl.getAttribute('data-content-id');
	const contentEl = document.getElementById(popoverId).innerHTML;
	return new bootstrap.Popover(popoverTriggerEl, {
		content: contentEl,
		html: true,
	});
})