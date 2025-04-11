import { Button } from "@/components/ui/button";

export default function Intro() {
	return (
		<section
			id="intro"
			className="min-h-screen flex flex-col justify-center items-center bg-background"
		>
			<div className="text-center px-4 py-8 sm:px-8 max-w-2xl">
				<h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
					Soy Ian Redzio
				</h1>
				<p className="text-lg sm:text-xl text-muted-foreground mb-8">
					+3 años de experiencia. Programador Full Stack y estudiante de Ciencias de la Computación, de Buenos Aires, Argentina 🇦🇷.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button className="bg-primary hover:bg-primary/90">Contacto</Button>
					<Button
						variant="outline"
						className="border-accent-foreground text-accent-foreground hover:bg-accent hover:text-accent-foreground"
					>
						LinkedIn
					</Button>
				</div>
			</div>
		</section>

	);
}
