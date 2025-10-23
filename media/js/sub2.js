var characters = {
    'Bloodhound': {
      imgsrcI:'./images/sub2/sub2_char/recon_bloodhound.png',
      name: 'Bloodhound',
      class: 'Recon',
      description: 'Technological Tracker.',
      abilities: {
        passive: {
          name: 'Tracker',
          description: 'Foes leave behind clues for you to find. See the paths of your prey and hunt them down.',
          imgsrc:'./images/sub2/sub2_abillity/rbTracker.png'
        },
        tactical: {
          name: 'Eye of the Allfather',
          description: 'Send out a scan that briefly reveals hidden enemies, traps, and clues through all structures in front of you.',
          imgsrc:'./images/sub2/sub2_abillity/rbEye_of_the_Allfather.png'
        },
        ultimate: {
          name: 'Beast of the Hunt',
          description: 'Enhances your senses, allowing you to move faster and highlights your foes, making them easier to track and eliminate.',
          imgsrc:'./images/sub2/sub2_abillity/rbBeast_of_the_Hunt.png'
        }
      }
    },
    'Gibraltar': {
      imgsrcI:'./images/sub2/sub2_char/support_gibraltar.png',
      name: 'Gibraltar',
      class: 'Support',
      description: 'Shielded Fortress.',
      abilities: {
        passive: {
          name: 'Gun Shield',
          description: 'Aiming down sights deploys a gun shield that blocks incoming fire.',
          imgsrc:'./images/sub2/sub2_abillity/sgDome_of_Protection.png'
        },
        tactical: {
          name: 'Dome of Protection',
          description: 'Throw a shield dome that blocks all incoming and outgoing attacks for 15 seconds.',
          imgsrc:'./images/sub2/sub2_abillity/sgGun_Shield.png'
        },
        ultimate: {
          name: 'Defensive Bombardment',
          description: 'Call in a concentrated mortar strike on a marked position.',
          imgsrc:'./images/sub2/sub2_abillity/sgDefensive_Bombardment.png'
        }
      }
    },
    'Lifeline': {
        imgsrcI:'./images/sub2/sub2_char/support_lala.png',
      name: 'Lifeline',
      class: 'Support',
      description: 'Combat Medic.',
      abilities: {
        passive: {
          name: 'Combat Revive',
          description: 'Deploy the D.O.C. to automatically revive a teammate, freeing you up to defend.',
          imgsrc:'./images/sub2/sub2_abillity/slCombat_Glide.png'
        },
        tactical: {
          name: 'D.O.C. Heal Drone',
          description: 'Deploy a drone that automatically heals nearby allies.',
          imgsrc:'./images/sub2/sub2_abillity/slD.O.C._Heal_Drone.png'
        },
        ultimate: {
          name: 'D.O.C. Halo',
          description: 'Call in a Care Package full of high-tier defensive gear.',
          imgsrc:'./images/sub2/sub2_abillity/slD.O.C._Halo.png'
        }
      }
    },
    'Pathfinder': {
      imgsrcI:'./images/sub2/sub2_char/skirmisher_pathpa.png', 
      name: 'Pathfinder',
      class: 'Skirmisher',
      description: 'Forward Scout.',
      abilities: {
        passive: {
          name: 'Insider Knowledge',
          description: 'Scan a survey beacon to reduce the cooldown of your Zipline Gun.',
          imgsrc:'./images/sub2/sub2_abillity/spInsider_Knowledge.png'
        },
        tactical: {
          name: 'Grappling Hook',
          description: 'Grapple to a wall or ground to get a quick vertical boost or to swing great distances.',
          imgsrc:'./images/sub2/sub2_abillity/spGrappling_Hook.png'
        },
        ultimate: {
          name: 'Zipline Gun',
          description: 'Create a zipline for you and your allies to travel across long distances.',
          imgsrc:'./images/sub2/sub2_abillity/spZipline_Gun.png'
        }
      }
    },
    'Wraith': {
      imgsrcI:'./images/sub2/sub2_char/skirmisher_wraith.png', 
      name: 'Wraith',
      class: 'Skirmisher',
      description: 'Interdimensional Skirmisher.',
      abilities: {
        passive: {
          name: 'Voices from the Void',
          description: 'A voice warns you when danger is approaching, like traps or enemies aiming at you.',
          imgsrc:'./images/sub2/sub2_abillity/swVoices_from_the_Void.png'
        },
        tactical: {
          name: 'Into the Void',
          description: 'Phase into the void to avoid all damage. You cannot see or be seen by enemies while in the void.',
          imgsrc:'./images/sub2/sub2_abillity/swInto_the_Void.png'
        },
        ultimate: {
          name: 'Dimensional Rift',
          description: 'Place two portals that you and your teammates can use to travel between.',
          imgsrc:'./images/sub2/sub2_abillity/swDimensional_Rift.png'
        }
      }
    },
    'Bangalore': {
        imgsrcI:'./images/sub2/sub2_char/assault_banga.png', 
      name: 'Bangalore',
      class: 'Assault',
      description: 'Professional Soldier.',
      abilities: {
        passive: {
          name: 'Double Time',
          description: 'Taking fire while sprinting makes you move faster for a short time.',
          imgsrc:'./images/sub2/sub2_abillity/abgDouble_Time.png'
        },
        tactical: {
          name: 'Smoke Launcher',
          description: 'Fire a canister that explodes into a smoke screen, obscuring visibility.',
          imgsrc:'./images/sub2/sub2_abillity/abgSmoke_Launcher.png'
        },
        ultimate: {
          name: 'Rolling Thunder',
          description: 'Call in an artillery strike that slowly advances across the battlefield.',
          imgsrc:'./images/sub2/sub2_abillity/abgRolling_Thunder.png'
        }
      }
    },
    'Caustic': {
        imgsrcI:'./images/sub2/sub2_char/controller_caustic.png', 
      name: 'Caustic',
      class: 'Controller',
      description: 'Toxic Trapper.',
      abilities: {
        passive: {
          name: 'Nox Vision',
          description: 'You can see enemies through your Nox Gas traps and grenades.',
          imgsrc:'./images/sub2/sub2_abillity/cctNox_Vision.png'
        },
        tactical: {
          name: 'Nox Gas Trap',
          description: 'Drop up to 6 canisters that release a damaging gas when shot or triggered by an enemy.',
          imgsrc:'./images/sub2/sub2_abillity/cctNox_Gas_Trap.png'
        },
        ultimate: {
          name: 'Nox Gas Grenade',
          description: 'Throw a grenade that covers a large area in a thick cloud of Nox Gas.',
          imgsrc:'./images/sub2/sub2_abillity/cctNox_Gas_Grenade.png'
        }
      }
    },
    'Mirage': {
        imgsrcI:'./images/sub2/sub2_char/support_mirage.png', 
      name: 'Mirage',
      class: 'Support',
      description: 'Holographic Trickster.',
      abilities: {
        passive: {
          name: 'Now You See Me',
          description: 'Automatically cloak when downed and revive teammates invisibly.',
          imgsrc:'./images/sub2/sub2_abillity/smNow_You_See_Me....png'
        },
        tactical: {
          name: 'Psyche Out',
          description: 'Send out a decoy to confuse and distract enemies.',
          imgsrc:'./images/sub2/sub2_abillity/smPsyche_Out.png'
        },
        ultimate: {
          name: 'Life of the Party',
          description: 'Deploy a team of decoys that mimic your actions to confuse enemies.',
          imgsrc:'./images/sub2/sub2_abillity/smLife_of_the_Party.png'
        }
      }
    },
    'Octane': {
        imgsrcI:'./images/sub2/sub2_char/skirmisher_okutann.png', 
      name: 'Octane',
      class: 'Skirmisher',
      description: 'Adrenaline Junkie.',
      abilities: {
        passive: {
          name: 'Swift Mend',
          description: 'Automatically regain health over time when not taking damage.',
          imgsrc:'./images/sub2/sub2_abillity/soSwift_Mend.png'
        },
        tactical: {
          name: 'Stim',
          description: 'Increase your movement speed for a short time at the cost of your health.',
          imgsrc:'./images/sub2/sub2_abillity/soStim.png'
        },
        ultimate: {
          name: 'Launch Pad',
          description: 'Deploy a jump pad that launches you and your teammates high into the air.',
          imgsrc:'./images/sub2/sub2_abillity/soLaunch_Pad.png'
        }
      }
    },
    'Wattson': {
        imgsrcI:'./images/sub2/sub2_char/controller_wattson.png', 
      name: 'Wattson',
      class: 'Controller',
      description: 'Static Defender.',
      abilities: {
        passive: {
          name: 'Spark of Genius',
          description: 'Ultimate Accelerants fully charge your ultimate. Standing near a Pylon recharges your Tactical.',
          imgsrc:'./images/sub2/sub2_abillity/cwSpark_of_Genius.png'
        },
        tactical: {
          name: 'Perimeter Security',
          description: 'Connect fence nodes to create electrified fences that slow and damage enemies.',
          imgsrc:'./images/sub2/sub2_abillity/cwPerimeter_Security.png'
        },
        ultimate: {
          name: 'Interception Pylon',
          description: 'Deploy a pylon that destroys incoming ordnance and repairs damaged shields.',
          imgsrc:'./images/sub2/sub2_abillity/cwInterception_Pylon.png'
        }
      }
    },
    'Crypto': {
        imgsrcI:'./images/sub2/sub2_char/recon_taesic.png', 
      name: 'Crypto',
      class: 'Recon',
      description: 'Surveillance Expert.',
      abilities: {
        passive: {
          name: 'Neurolink',
          description: 'Crypto and his teammates see what his drone detects, including enemies within a 30m radius.',
          imgsrc:'./images/sub2/sub2_abillity/rcNeurolink.png'
        },
        tactical: {
          name: 'Surveillance Drone',
          description: 'Deploy a drone that can scan enemies and hack survey beacons.',
          imgsrc:'./images/sub2/sub2_abillity/rcSurveillance_Drone.png'
        },
        ultimate: {
          name: 'Drone EMP',
          description: 'Discharge an EMP blast from your drone that damages enemy shields and slows them.',
          imgsrc:'./images/sub2/sub2_abillity/rcDrone_EMP.png'
        }
      }
    },
    'Revenant': {
        imgsrcI:'./images/sub2/sub2_char/assault_reva.png', 
      name: 'Revenant',
      class: 'Assault',
      description: 'Synthetic Nightmare.',
      abilities: {
        passive: {
          name: 'Forged Shadows',
          description: 'Your shadows provide a temporary shield that regenerate after breaking or getting a knock.',
          imgsrc:'./images/sub2/sub2_abillity/arAssassin_Instinct.png'
        },
        tactical: {
          name: 'Shadow Pounce',
          description: 'Leap forward, covering a large distance quickly.',
          imgsrc:'./images/sub2/sub2_abillity/arShadow_Pounce.png'
        },
        ultimate: {
          name: 'Forged Shadows (Ultimate)',
          description: 'Harden your shadows to fortify your health and provide a shield against damage.',
          imgsrc:'./images/sub2/sub2_abillity/arForged_Shadows.png'
        }
      }
    },
    'Loba': {
        imgsrcI:'./images/sub2/sub2_char/support_lova.png', 
      name: 'Loba',
      class: 'Support',
      description: 'Translocating Thief.',
      abilities: {
        passive: {
          name: 'Eye for Quality',
          description: 'See Epic and Legendary loot through walls within a certain radius.',
          imgsrc:'./images/sub2/sub2_abillity/slbEye_for_Quality.png'
        },
        tactical: {
          name: 'Burglar\'s Best Friend',
          description: 'Throw a jump drive bracelet to teleport to hard-to-reach places.',
          imgsrc:'./images/sub2/sub2_abillity/slbBurglar_Best_Friend.png'
        },
        ultimate: {
          name: 'Black Market Boutique',
          description: 'Set up a device that lets you teleport nearby loot to your inventory.',
          imgsrc:'./images/sub2/sub2_abillity/slbBlack_Market_Boutique.png'
        }
      }
    },
    'Rampart': {
        imgsrcI:'./images/sub2/sub2_char/controller_rampart.png', 
      name: 'Rampart',
      class: 'Controller',
      description: 'Base of Fire.',
      abilities: {
        passive: {
          name: 'Modded Loader',
          description: 'Increased magazine size and faster reloading when using LMGs and Miniguns.',
          imgsrc:'./images/sub2/sub2_abillity/crModded_Loader.png'
        },
        tactical: {
          name: 'Amped Cover',
          description: 'Place a fortified wall that provides cover and increases the damage of projectiles fired through it.',
          imgsrc:'./images/sub2/sub2_abillity/crAmped_Cover.png'
        },
        ultimate: {
          name: 'Emplaced Minigun "Sheila"',
          description: 'Deploy a powerful minigun that can be used by you or your teammates.',
          imgsrc:'./images/sub2/sub2_abillity/crSheila.png'
        }
      }
    },
    'Horizon': {
        imgsrcI:'./images/sub2/sub2_char/skirmisher_hora.png', 
      name: 'Horizon',
      class: 'Skirmisher',
      description: 'Gravity Manipulator.',
      abilities: {
        passive: {
          name: 'Spacewalk',
          description: 'Increased air control and a soft landing after falling from a great height.',
          imgsrc:'./images/sub2/sub2_abillity/shSpacewalk.png'
        },
        tactical: {
          name: 'Gravity Lift',
          description: 'Create a column of energy that pushes players upwards.',
          imgsrc:'./images/sub2/sub2_abillity/shGravity_Lift.png'
        },
        ultimate: {
          name: 'Black Hole',
          description: 'Throw a device that creates a mini-black hole, pulling enemies towards it.',
          imgsrc:'./images/sub2/sub2_abillity/shBlack_Hole.png'
        }
      }
    },
    'Fuse': {
      imgsrcI:'./images/sub2/sub2_char/assault_fuse.png', 
      name: 'Fuse',
      class: 'Assault',
      description: 'Explosives Enthusiast.',
      abilities: {
        passive: {
          name: 'Grenadier',
          description: 'Stack an extra grenade per inventory slot. Launch grenades further, faster, and more accurately.',
          imgsrc:'./images/sub2/sub2_abillity/afGrenadier.png'
        },
        tactical: {
          name: 'Knuckle Cluster',
          description: 'Fire a cluster bomb that repeatedly explodes upon impact.',
          imgsrc:'./images/sub2/sub2_abillity/afKnuckle_Cluster.png'
        },
        ultimate: {
          name: 'The Motherlode',
          description: 'Launch a ring of fire that surrounds and traps enemies.',
          imgsrc:'./images/sub2/sub2_abillity/afThe_Motherlode.png'
        }
      }
    },
    'Valkyrie': {
      imgsrcI:'./images/sub2/sub2_char/recon_valkyrie.png', 
      name: 'Valkyrie',
      class: 'recon',
      description: 'Winged Avenger.',
      abilities: {
        passive: {
          name: 'VTOL Jets',
          description: 'Use a jetpack to fly short distances.',
          imgsrc:'./images/sub2/sub2_abillity/rvVTOL_Jets.png'
        },
        tactical: {
          name: 'Missile Swarm',
          description: 'Launch a swarm of mini-rockets that damage and disorient enemies.',
          imgsrc:'./images/sub2/sub2_abillity/rvMissile_Swarm.png'
        },
        ultimate: {
          name: 'Skyward Dive',
          description: 'Launch into the air and redeploy with your teammates.',
          imgsrc:'./images/sub2/sub2_abillity/rvSkyward_Dive.png'
        }
      }
    },
    'Seer': {
        imgsrcI:'./images/sub2/sub2_char/recon_seer.png', 
      name: 'Seer',
      class: 'Recon',
      description: 'Ambush Artist.',
      abilities: {
        passive: {
          name: 'Heart Seeker',
          description: 'Detect the heartbeats of nearby enemies when aiming down sights.',
          imgsrc:'./images/sub2/sub2_abillity/rsHeart_Seeker.png'
        },
        tactical: {
          name: 'Focus of Attention',
          description: 'Fire a micro-drone blast that reveals enemies, including their health and shields.',
          imgsrc:'./images/sub2/sub2_abillity/rsFocus_of_Attention.png'
        },
        ultimate: {
          name: 'Exhibit',
          description: 'Deploy a large sphere of micro-drones that reveal enemies who move quickly within it.',
          imgsrc:'./images/sub2/sub2_abillity/rsExhibit.png'
        }
      }
    },
    'Ash': {
      imgsrcI:'./images/sub2/sub2_char/skirmisher_ash.png', 
      name: 'Ash',
      class: 'Skirmisher',
      description: 'Incisive Instigator.',
      abilities: {
        passive: {
          name: 'Marked for Death',
          description: 'See the location of death boxes on your map and mark surviving attackers.',
          imgsrc:'./images/sub2/sub2_abillity/sasPredator_Pursuit.png'
        },
        tactical: {
          name: 'Arc Snare',
          description: 'Throw a spinning snare that damages and tethers the first enemy who gets too close.',
          imgsrc:'./images/sub2/sub2_abillity/sasArc_Snare.png'
        },
        ultimate: {
          name: 'Phase Breach',
          description: 'Tear a one-way portal to a targeted location.',
          imgsrc:'./images/sub2/sub2_abillity/sasPhase_Breach.png'
        }
      }
    },
    'MadMaggie': {
      imgsrcI:'./images/sub2/sub2_char/assault_maggie.png', 
      name: 'Mad Maggie',
      class: 'Assault',
      description: 'Warlord.',
      abilities: {
        passive: {
          name: 'Warlord\'s Ire',
          description: 'Temporarily highlights enemies you damage and move faster with a shotgun.',
          imgsrc:'./images/sub2/sub2_abillity/ammWarlord_Ire.png'
        },
        tactical: {
          name: 'Riot Drill',
          description: 'Fire a drill that burns enemies on the other side of a wall or obstacle.',
          imgsrc:'./images/sub2/sub2_abillity/ammRiot_Drill.png'
        },
        ultimate: {
          name: 'Wrecking Ball',
          description: 'Throw a ball that drops speed-boosting pads and explodes when it hits an enemy or obstacle.',
          imgsrc:'./images/sub2/sub2_abillity/ammWrecking_Ball.png'
        }
      }
    },
    'Newcastle': {
        imgsrcI:'./images/sub2/sub2_char/support_newca.png', 
      name: 'Newcastle',
      class: 'Support',
      description: 'Heroic Defender.',
      abilities: {
        passive: {
          name: 'Retrieve the Wounded',
          description: 'Drag downed teammates while shielding them with a small shield.',
          imgsrc:'./images/sub2/sub2_abillity/sncRetrieve_the_Wounded.png'
        },
        tactical: {
          name: 'Mobile Shield',
          description: 'Deploy a floating shield that can be moved and re-positioned.',
          imgsrc:'./images/sub2/sub2_abillity/sncMobile_Shield.png'
        },
        ultimate: {
          name: 'Castle Wall',
          description: 'Leap to a target location and create a large fortified wall that provides cover for your team.',
          imgsrc:'./images/sub2/sub2_abillity/sncCastle_Wall.png'
        }
      }
    },
    'Vantage': {
      imgsrcI:'./images/sub2/sub2_char/recon_vantage.png', 
      name: 'Vantage',
      class: 'Recon',
      description: 'Survivalist Sniper.',
      abilities: {
        passive: {
          name: 'Spotter\'s Lens',
          description: 'Aiming down sights with a mid-to-long range scope reveals enemy shields and team size.',
          imgsrc:'./images/sub2/sub2_abillity/rvtSpotter_Lens.png'
        },
        tactical: {
          name: 'Echo Relocation',
          description: 'Command your bat, Echo, to a location and then launch yourself to him.',
          imgsrc:'./images/sub2/sub2_abillity/rvtEcho_Relocation.png'
        },
        ultimate: {
          name: 'Sniper\'s Mark',
          description: 'Equip a custom sniper rifle that marks enemies and applies a damage bonus for your team.',
          imgsrc:'./images/sub2/sub2_abillity/rvtSniper_Mark.png'
        }
      }
    },
    'Catalyst': {
        imgsrcI:'./images/sub2/sub2_char/controller_catal.png', 
      name: 'Catalyst',
      class: 'Controller',
      description: 'Defensive Fortifier.',
      abilities: {
        passive: {
          name: 'Barricade',
          description: 'Reinforce doors and structures to strengthen their defenses.',
          imgsrc:'./images/sub2/sub2_abillity/ccBarricade.png'
        },
        tactical: {
          name: 'Piercing Spikes',
          description: 'Throw a canister of ferrofluid that creates a field of spikes, damaging enemies who cross it.',
          imgsrc:'./images/sub2/sub2_abillity/ccPiercing_Spikes.png'
        },
        ultimate: {
          name: 'Dark Veil',
          description: 'Create a massive permeable wall that blinds and slows enemies who pass through it.',
          imgsrc:'./images/sub2/sub2_abillity/ccDark_Veil.png'
        }
      }
    },
    'Ballistic': {
      imgsrcI:'./images/sub2/sub2_char/assault_ballistic.png', 
      name: 'Ballistic',
      class: 'Assault',
      description: 'Seasoned Gunslinger.',
      abilities: {
        passive: {
          name: 'Weapon Sling',
          description: 'Carry a third weapon that can be activated to provide infinite ammo and a speed boost.',
          imgsrc:'./images/sub2/sub2_abillity/abSling.png'
        },
        tactical: {
          name: 'Whistler',
          description: 'Fire a projectile that heats up an enemy\'s weapon, causing it to overheat and explode if they continue to fire.',
          imgsrc:'./images/sub2/sub2_abillity/abWhistler.png'
        },
        ultimate: {
          name: 'Tempest',
          description: 'For a short time, you and nearby allies gain faster reloads, faster unarmed movement speed, and infinite ammo in their sling weapon.',
          imgsrc:'./images/sub2/sub2_abillity/abTempest.png'
        }
      }
    },
    'Conduit': {
        imgsrcI:'./images/sub2/sub2_char/support_conduit.png', 
      name: 'Conduit',
      class: 'Support',
      description: 'Shield Healer.',
      abilities: {
        passive: {
          name: 'Savior\'s Speed',
          description: 'Move faster when running towards a teammate who is out of range of your tactical ability.',
          imgsrc:'./images/sub2/sub2_abillity/scSavior_Speed.png'
        },
        tactical: {
          name: 'Radiant Transfer',
          description: 'Give a teammate a temporary shield boost, which recharges over a short time.',
          imgsrc:'./images/sub2/sub2_abillity/scRadiant_Transfer.png'
        },
        ultimate: {
          name: 'Energy Barricade',
          description: 'Deploy a series of nodes that create a damaging and slowing energy field.',
          imgsrc:'./images/sub2/sub2_abillity/scEnergy_Barricade.png'
        }
      }
    },
    'Alter': {
      imgsrcI:'./images/sub2/sub2_char/skirmisher_alter.png',
      name: 'Alter',
      class: 'Skirmisher',
      description: 'Void-Dwelling Trickster.',
      abilities: {
        passive: {
          name: 'Gift from the Rift',
          description: 'Can see and interact with deathbox items through walls, taking one item per deathbox.',
          imgsrc:'./images/sub2/sub2_abillity/salGift_From_The_Rift.png'
        },
        tactical: {
          name: 'Void Passage',
          description: 'Create a portal to pass through walls or floors, enabling quick traversal and surprise attacks.',
          imgsrc:'./images/sub2/sub2_abillity/salVoid_Passage.png'
        },
        ultimate: {
          name: 'Void Nexus',
          description: 'Deploy a device that creates a portal for teammates to quickly teleport back to its location, allowing for rapid retreats or flanking maneuvers.',
          imgsrc:'./images/sub2/sub2_abillity/salVoid_Nexus.png'
        }
      }
    },
    'Sparrow': {
      imgsrcI:'./images/sub2/sub2_char/recon_sparrow.png',
      name: 'Sparrow',
      class: 'Recon',
      description: 'Agile Archer.',
      abilities: {
        passive: {
          name: 'Double Jump',
          description: 'Allows the character to jump again while in the air. Jumping while climbing will launch Sparrow up the wall. The character can carry additional arrows and explosive arrows for the Bocek.',
          imgsrc:'./images/sub2/sub2_abillity/rsDouble_Jump.png'
        },
        tactical: {
          name: 'Tracker Dart',
          description: 'Shoots a tracker from the gauntlet to reveal enemies who walk within its line of sight. These darts can also activate Survey Beacons from a distance.',
          imgsrc:'./images/sub2/sub2_abillity/rsTracker_Dart.png'
        },
        ultimate: {
          name: 'Stinger Bolt',
          description: 'Shoots a large arrow that anchors where it lands. After charging up, it will shock anyone within its range, causing damage and slowing down opponents it hits.',
          imgsrc:'./images/sub2/sub2_abillity/rsStinger_Bolt.png'
        }
      }
    }
  };

var chardesccontainer = document.querySelector('#char_description')
var charButton = document.querySelectorAll('.charBtn')


charButton.forEach(button => {
    button.addEventListener('click', () => {

    // 모든 버튼에서 active 클래스 제거
    charButton.forEach(btn => btn.classList.remove('active'));
    // 현재 클릭한 버튼에 active 클래스 추가
    button.classList.add('active');

        var charId = button.dataset.charId;
        var charInfo = characters[charId];

        chardesccontainer.innerHTML =`
               <img src="${charInfo.imgsrcI}" alt="${charInfo.name}">
				<ul>
					<li>
                        <p>${charInfo.class}</p>
                        <h4>${charInfo.name}</h4>
                        <p>${charInfo.description}</p>
                    </li>
					<li>
                        <dl>
                            <dt>passive</dt>
                            <dd>
                                <img src="${charInfo.abilities.passive.imgsrc}". alt="${charInfo.abilities.passive.name}">
                                <span>${charInfo.abilities.passive.name}</span>
                                               <p class="ability-detail">${charInfo.abilities.passive.description}</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>tactical</dt>
                            <dd>
                                <img src="${charInfo.abilities.tactical.imgsrc}". alt="${charInfo.abilities.passive.name}">
                                <span>${charInfo.abilities.tactical.name}</span>
                                               <p class="ability-detail">${charInfo.abilities.tactical.description}</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt>ultimate</dt>
                            <dd>
                                <img src="${charInfo.abilities.ultimate.imgsrc}". alt="${charInfo.abilities.passive.name}">
                                <span>${charInfo.abilities.ultimate.name}</span>
                                               <p class="ability-detail">${charInfo.abilities.ultimate.description}</p>
                            </dd>
                        </dl>
                    </li>
				</ul>
        `;
    });
});
// 1. charButton 노드 리스트의 첫 번째 요소를 선택합니다.
const firstButton = charButton[0];

// 2. 첫 번째 버튼이 존재하는지 확인합니다.
if (firstButton) {
    // 3. 해당 버튼에 'active' 클래스를 추가하여 시각적인 활성화 상태를 만듭니다.
    firstButton.classList.add('active');
    
    // 4. 첫 번째 버튼에 연결된 'click' 이벤트 핸들러 함수를 직접 실행합니다.
    //    (이 함수 안에 캐릭터 정보 표시 로직이 들어 있습니다.)
    firstButton.click(); 
}




