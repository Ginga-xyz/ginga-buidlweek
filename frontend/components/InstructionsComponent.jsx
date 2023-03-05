import dynamic from 'next/dynamic'
import React from "react";
import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import MapContainer from "./MapContainer";
import {
	Profile
} from '@lens-protocol/widgets-react'

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			{/* <Profile
				handle="nader"
			/> */}
			<header className={styles.header_container}>
				<h1>
					<span>Ginga</span>
				</h1>
				<p>
					Explore and trade NFT's
				</p>
			</header>

			<MapContainer></MapContainer>

			{/* <div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#components"}
				>
					<div className={styles.button}>
						 <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> 
						<p>Map will go here</p>
					</div>
				</a>
			</div>  */}
			<div>
				<br/><br/>
				<a
					href="https://lenster.xyz/?text=Hello%20World!&url=https://ondarox.co&via=MyCoolApp&hashtags=lens,web3"
					target="_blank"
				>
					Share to Lens
				</a>
			</div>
			<br/>
			<div>
				<p>Made with 💙 by the Ginga team</p>
			</div>
		</div>
	);
}
