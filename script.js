document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function () {
        // إزالة الفعالية من جميع الأزرار
        document.querySelectorAll('.list-group-item').forEach(btn => btn.classList.remove('active'));
        // إضافة الفعالية للزر الحالي
        this.classList.add('active');

        // اختيار العناصر التي سيتم تحديثها
        const tiltedContainer = document.querySelector('.tilted-container');
        const title = document.getElementById('contentTitle');
        const description = document.getElementById('contentDescription');
        const image = document.getElementById('contentImage');

        // إضافة حركة slide-out إلى البطاقة الحالية
        tiltedContainer.classList.add('slide-out');

        // بعد انتهاء حركة slide-out، نقوم بتحديث المحتوى وتطبيق slide-in
        setTimeout(() => {
            // تحديث المحتوى بناءً على الزر المضغوط
            const target = this.getAttribute('data-target');
            if (target === '#realEstate') {
                title.innerText = 'Real Estate';
                description.innerHTML = '<strong>Features:</strong> Stable investment with asset value increasing over time, monthly rental income, inflation protection.<br><strong>Prices:</strong> Starting at $50,000 for small investments in commercial or residential properties.<br><strong>Profit period:</strong> Long-term returns starting within 2-5 years.';
                image.src = 'assets/image/image.png';
            } else if (target === '#schools') {
                title.innerText = 'Schools';
                description.innerHTML = '<strong>Features:</strong> Investment in education infrastructure, stable demand, government incentives.<br><strong>Prices:</strong> Starting at $70,000.<br><strong>Profit period:</strong> Returns expected within 3-6 years.';
                image.src = 'images/schools.jpg';
            } else if (target === '#hospitals') {
                title.innerText = 'Hospitals';
                description.innerHTML = '<strong>Features:</strong> Investment in healthcare facilities, high demand, recession-proof.<br><strong>Prices:</strong> Starting at $100,000.<br><strong>Profit period:</strong> Returns within 4-7 years.';
                image.src = 'images/hospitals.jpg';
            } else if (target === '#nightclubs') {
                title.innerText = 'Nightclubs';
                description.innerHTML = '<strong>Features:</strong> High ROI in entertainment sector, popular in urban areas.<br><strong>Prices:</strong> Starting at $30,000.<br><strong>Profit period:</strong> Fast returns in 1-3 years.';
                image.src = 'images/nightclubs.jpg';
            }

            // إزالة حركة slide-out وإضافة slide-in للبطاقة الجديدة
            tiltedContainer.classList.remove('slide-out');
            tiltedContainer.classList.add('slide-in');

            // إزالة slide-in بعد انتهاء الأنميشن لإعادة تعيين الحركة
            setTimeout(() => tiltedContainer.classList.remove('slide-in'), 500);
        }, 500); // يجب أن يتزامن مع مدة slide-out
    });
});
