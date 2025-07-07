
const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    });

    document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
    document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));

    const items = document.querySelectorAll('a, button');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('pressable');
    });
    
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('pressable');
    });
    });

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    

    class Particle {
        constructor(effect, x, y, color) {
            this.effect = effect;
            this.x = x;
            this.y = y;
            this.originX = x;
            this.originY = y;
            this.color = color;
            this.size = effect.gap;
            this.vx = 0;
            this.vy = 0;
            this.friction = 0.85;
            this.ease = 0.1;
        }

        update() {
            let dx = this.effect.mouse.x - this.x;
            let dy = this.effect.mouse.y - this.y;
            let distance = dx * dx + dy * dy;
            let force = -this.effect.mouse.radius / distance;

            if (distance < this.effect.mouse.radius) {
                let angle = Math.atan2(dy, dx);
                this.vx += force * Math.cos(angle);
                this.vy += force * Math.sin(angle);
            }

            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }

        draw() {
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }

        isNearMouse() {
            let dx = this.effect.mouse.x - this.x;
            let dy = this.effect.mouse.y - this.y;
            return dx * dx + dy * dy < this.effect.mouse.radius;
        }

        isMoving() {
            return Math.abs(this.x - this.originX) > 0.5 || Math.abs(this.y - this.originY) > 0.5;
        }
    }

    class Effect {
        constructor(context) {
            this.context = context;
            this.canvasWidth = canvas.width;
            this.canvasHeight = canvas.height;
            this.particles = [];
            this.gap = 2;
            this.mouse = {
                radius: 3000,
                x: -1000,
                y: -1000,
            };

            this.image = new Image();
            this.image.crossOrigin = "anonymous";
            this.image.src = 'topName.png';

            this.image.onload = () => {
                this.resizeCanvas();
                this.createParticlesFromImage();
                animate();
            };

            canvas.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            });

            canvas.addEventListener('mouseleave', () => {
                this.mouse.x = -9999;
                this.mouse.y = -9999;
            });

            window.addEventListener('resize', () => {
                this.resizeCanvas();
                this.createParticlesFromImage();
            });
        }

        resizeCanvas() {
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = this.image.height * (this.canvasWidth / this.image.width);
            
            canvas.width = this.canvasWidth;
            canvas.height = this.canvasHeight;
        }

        createParticlesFromImage() {
            const offCanvas = document.createElement('canvas');
            offCanvas.width = this.canvasWidth;
            offCanvas.height = this.canvasHeight;
            const offCtx = offCanvas.getContext('2d');
            offCtx.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);

            const pixels = offCtx.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            this.particles = [];

            for (let y = 0; y < this.canvasHeight; y += this.gap) {
                for (let x = 0; x < this.canvasWidth; x += this.gap) {
                    const index = (y * this.canvasWidth + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = `rgb(${red},${green},${blue})`;
                        this.particles.push(new Particle(this, x, y, color));
                    }
                }
            }
        }

        render() {
            this.context.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);
            this.particles.forEach(p => {
                const dx = this.mouse.x - p.originX;
                const dy = this.mouse.y - p.originY;
                const distance = dx * dx + dy * dy;

                if (distance < this.mouse.radius || p.isMoving()) {
                    this.context.clearRect(p.originX, p.originY, this.gap, this.gap);

                    p.update();
                    p.draw();
                }
            });
        }
    }

    const effect = new Effect(ctx);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
    }

    

});


//illustration 

let Illustration = [
  {
    image: "illustrationBox/illustrationOne.jpg",
  },
  {
    image: "illustrationBox/illustrationTwo.jpg",
  },
  {
    image: "illustrationBox/illustrationThree.jpg",
  },
  {
    image: "illustrationBox/illustrationFour.jpg",
  },
  {
    image: "illustrationBox/illustrationFive.jpg",
  },
  {
    image: "illustrationBox/illustrationSix.jpg",
  },
  {
    image: "illustrationBox/illustrationSeven.jpg",
  },
  {
    image: "illustrationBox/illustrationEight.jpg",
  },
  {
    image: "illustrationBox/illustrationNine.jpg",
  },
  {
    image: "illustrationBox/illustrationTen.jpg",
  },
  {
    image: "illustrationBox/illustrationEleven.jpg",
  },
  
];

function creerCarte(Illustration) {
  let contenu = `
    <img class="images" src="${Illustration.image}" alt="ImageIllustration">
  `;
  let carte = document.createElement("div");
  carte.innerHTML = contenu;
  carte.classList.add("carte");
  return carte;
}

// Boucle pour afficher les cartes
for (let i = 0; i < Illustration.length; i++) {
  let carte = creerCarte(Illustration[i]);
  document.querySelector("#image-container").appendChild(carte);
}

