import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
	selector: "app-heroes",
	templateUrl: "./heroes.component.html",
	styleUrls: ["./heroes.component.css"],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	constructor(private heroService: HeroService, private router: Router) {}

	title = "Tour of Heroes";
	heroes: Hero[];
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	goToDetail(): void {
		this.router.navigate(["/detail", this.selectedHero.id]);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
	}
}
