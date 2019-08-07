const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const log = require('../../util/log');                                      // Is this necessary? 
const cast = require('../../util/cast');                                    // Is this necessary? 
const formatMessage = require('format-message');                            // Is this necessary? 
const Base64Util = require('../../util/base64-util');                       // Is this necessary? 

/**
 * Class for the GAN Paint block in Scratch 3.0. 
 */
class Scratch3GANPaintBlocks {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return 'GAN Paint';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return 'ganpaint';
    }

    /**
     * The constructor for Scratch3GANPaintBlocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: Scratch3GANPaintBlocks.EXTENSION_ID,
            name: Scratch3GANPaintBlocks.EXTENSION_NAME,
            showStatusButton: true,                         // Delete this line? 
            blocks: [
                {
                    opcode: 'saveGANPaintImage',
                    text: formatMessage({
                        id: 'ganpaint.saveGANPaintImage',
                        default: 'save [EDITOR] as a costume',
                        description: 'edit your image with the GAN Paint editor, and then save the image as a costume'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        EDITOR: {
                            type: ArgumentType.GANPAINT
                        }
                    }
                }
            ]
        };
    }

    /**
     * Eventually is supposed to save the GAN Paint editor's image as a costume. Currently it does not do so. 
     * @param {object} args - the block's arguments. 
     */
    saveGANPaintImage (args) {
        console.log(args);

        // costumeObj = {
        //     asset: {
        //         assetId: '../../../../scratch-blocks/media/extensions/ganpaint_images/church0',
        //         dataFormat: 'jpg'
        //     }
        //
        // }

        // const stage = this.runtime.getTargetForStage();
        // stage.addCostume('../../../../scratch-blocks/media/extensions/ganpaint_images/church0.jpg', null);
    }
}

module.exports = Scratch3GANPaintBlocks;
